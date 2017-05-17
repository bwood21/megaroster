$(document).foundation()

const megaroster = {
  students: [],

  init(listSelector) {
    this.studentList = document.querySelector(listSelector)
    this.max = 0
    this.setupEventListeners()  
  },

  setupEventListeners() {
    document
      .querySelector('#new-student')
      .addEventListener('submit', this.addStudent.bind(this))
  },

  removeStudent(ev) {
    const btn = ev.target
    for(let i=0;i<this.students.length;i++){
     if(this.students[i].name==btn.parentNode.textContent){
       this.students.splice(i,1)
    }}
    btn.closest('.student').remove()
    
    // Remove it from the this.students array
    // this.students.splice(?, 1)
  },
  hypeStudent(ev){
    const btn = ev.target
    btn.closest('.student').style.color = 'pink'
  },

  moveup(ev){
    const btn = ev.target
    students.move(btn.closest('student').textContent,1)
  },

  movedown(ev){
    const btn = ev.target
    students.move(btn.closest('student'.textContent))
  },

  addStudent(ev) {
    ev.preventDefault()
    const f = ev.target
    const student = {
      id: this.max + 1,
      name: f.studentName.value,
    }
    this.students.unshift(student)

    const listItem = this.buildListItem(student)
    this.prependChild(this.studentList, listItem)

    this.max ++
    f.reset()
  },

  prependChild(parent, child) {
    parent.insertBefore(child, parent.firstChild)
  },

  buildListItem(student) {
    const template = document.querySelector('.student.template')
    const li = template.cloneNode(true)
    this.removeClassName(li, 'template')
    li.querySelector('.student-name').textContent = student.name
    li.dataset.id = student.id

    li
      .querySelector('button.remove')
      .addEventListener('click', this.removeStudent.bind(this))
    li
      .querySelector('button.promote')
      .addEventListener('click',this.hypeStudent.bind(this))
    li
      .querySelector('button.up')
      .addEventListener('click',this.moveup.bind(this))
    li
      .querySelector('button.down')
      .addEventListener('click',this.movedown.bind(this))

    return li
  },

  removeClassName(el, className){
    el.className = el.className.replace(className, '').trim()
  }
}
megaroster.init('#studentList')
Array.prototype.move = (element, offset) =>{
  index = this.indexOf(element)
  newIndex = index + offset
  
  if (newIndex > -1 && newIndex < this.length){
   
    removedElement = this.splice(index, 1)[0]
  

    this.splice(newIndex, 0, removedElement)}
  }
