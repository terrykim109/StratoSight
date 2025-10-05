import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';
import { getUser } from '@/lib/auth';

export async function GET() {
  try {
    const user = await getUser();
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    await dbConnect();
    const userData = await User.findById(user.userId).select('progress');

    return NextResponse.json({ progress: userData.progress });
  } catch (error) {
    console.error('Get progress error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch progress' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const user = await getUser();
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { type, data } = await request.json();

    await dbConnect();
    const userData = await User.findById(user.userId);

    switch (type) {
      case 'quiz':
        userData.progress.quizScores.push({
          quizId: data.quizId,
          score: data.score,
          completedAt: new Date(),
        });
        break;
      case 'badge':
        if (!userData.progress.badges.includes(data.badge)) {
          userData.progress.badges.push(data.badge);
        }
        break;
      case 'search':
        userData.progress.searchHistory.push({
          query: data.query,
          timestamp: new Date(),
        });
        break;
      case 'bookmark':
        if (!userData.progress.bookmarkedPapers.includes(data.paperId)) {
          userData.progress.bookmarkedPapers.push(data.paperId);
        }
        break;
      default:
        return NextResponse.json(
          { error: 'Invalid progress type' },
          { status: 400 }
        );
    }

    await userData.save();

    return NextResponse.json({ success: true, progress: userData.progress });
  } catch (error) {
    console.error('Update progress error:', error);
    return NextResponse.json(
      { error: 'Failed to update progress' },
      { status: 500 }
    );
  }
}