const inputName = document.querySelector('.name')
const inputEmail = document.querySelector('.email')
const inputMessage = document.querySelector('.message')
const send = document.querySelector('.send')
const reset = document.querySelector('.reset')
const listItems = document.querySelector('.output')

send.addEventListener('click', (e) => {
    e.preventDefault()
    localStorage.setItem('details', JSON.stringify({
        name: inputName.value,
        email: inputEmail.value,
        message: inputMessage.value
    }))

    let details = JSON.parse(localStorage.getItem('details'));
    const list1 = document.createElement('li')
    const node1 = document.createTextNode(details.name)
    list1.appendChild(node1)
    const list2 = document.createElement('li')
    const node2 = document.createTextNode(details.email)
    list2.appendChild(node2)
    const list3 = document.createElement('li')
    const node3 = document.createTextNode(details.message)
    list3.appendChild(node3)

    listItems.appendChild(list1)
    listItems.appendChild(list2)
    listItems.appendChild(list3)


})

reset.addEventListener('click', (e) => {
    e.preventDefault()
    inputName.value = ""
    inputEmail.value = ""
    inputMessage.value = ""

    localStorage.clear()

})

