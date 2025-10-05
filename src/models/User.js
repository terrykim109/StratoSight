import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
  },
  name: {
    type: String,
    required: [true, 'Please provide a name'],
  },
  progress: {
    quizScores: [{
      quizId: String,
      score: Number,
      completedAt: Date,
    }],
    badges: [String],
    completedChallenges: [String],
    searchHistory: [{
      query: String,
      timestamp: Date,
    }],
    bookmarkedPapers: [String],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.User || mongoose.model('User', UserSchema);