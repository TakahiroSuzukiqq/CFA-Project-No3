const mongoose = require('mongoose');
const { Schema } = mongoose;
const QuestionnaireSchema = new Schema ({
	name: {
		type: String,
		trim: true
	},
	question_type: {
		type: String
		// default: "string"
	},
	qa_key: {
		type: String
	},
	created_at: {
		type: Date,
		default: Date.now
	},
	questions: {
		qa_key: String,
		name: String,
		question_type: String,
		created_at: Date,
	  answers: {
			qa_key: String,
			name: String,
			userAnswer: String
	  }
	}
});

const Questionnaire = mongoose.model('Questionnaire', QuestionnaireSchema);

module.exports = Questionnaire;
