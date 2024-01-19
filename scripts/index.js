const fs = require('fs')
const path = require('path')

const courses = JSON.parse(fs.readFileSync(path.resolve(__dirname, './courses.json')))

let text = ''
for (const { cId, fileName } of courses) {
  const courseDataText = fs.readFileSync(path.resolve(__dirname, `./courses/${fileName}.json`), 'utf-8')
  const courseData = JSON.parse(courseDataText)

  for (const course of courseData) {
    text += course.english + '\n'
  }
}

fs.writeFileSync(path.resolve(__dirname, './courses.txt'), text)
