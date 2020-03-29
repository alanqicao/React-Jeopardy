# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#cards question, answer, points, category id
#categories name
#questions type_of_question, correct_answer, answer 1-4, card_id


Category.create(name: 'Javascript')
Category.create(name: 'Ruby')
Category.create(name: 'Python')
Category.create(name: 'HTML')

Card.create(
  question: 1 ,
  answer: '',
  points: 100,
  category_id: 1,
)
Question.create(
  question: 'Is Javascript the same thing as Java',
  type_of_question: 'Multiple Choice',
  correct_answer: 'Not at all',
  answer_1: 'Absolutely',
  answer_2: 'It is in a way', 
  answer_3: 'Not at all',
  answer_4: 'All languages are the same',
  card_id: 1,
)

Card.create(
  question: 2 ,
  answer: '',
  points: 200,
  category_id: 1,
)
Question.create(
  question: 'How to declare a function',
  type_of_question: 'Multiple Choice',
  correct_answer: 'Both const Null()=>{} and function Null(){}',
  answer_1: 'function Null(){//stuff in here}',
  answer_2: 'Javascript doesnt have functions', 
  answer_3: 'const Null = () => {//stuff here}',
  answer_4: 'Both const Null()=>{} and function Null(){}',
  card_id: 2,
)

Card.create(
  question: 3 ,
  answer: '',
  points: 100,
  category_id: 2,
)
Question.create(
  question: 'What is (@something = something) in ruby',
  type_of_question: 'Multiple Choice',
  correct_answer: 'An Instance Variable',
  answer_1: 'Thats not in Ruby',
  answer_2: 'Global Variable', 
  answer_3: 'An Instance Variable',
  answer_4: 'Just something weird that you dont use',
  card_id: 3,
)

Card.create(
  question: 4 ,
  answer: '',
  points: 200,
  category_id: 2,
)
Question.create(
  question: 'What part of MVC talks to the Database',
  type_of_question: 'Multiple Choice',
  correct_answer: 'The Model',
  answer_1: 'The Model',
  answer_2: 'Nothing does', 
  answer_3: 'The View',
  answer_4: 'The Controller',
  card_id: 4,
)

puts'seeded'