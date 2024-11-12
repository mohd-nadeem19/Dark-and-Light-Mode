const fullDarkModeChechbox = document.querySelector('#full-dark-mode')
const containedDarkModeCheckbox = document.querySelector('#contained-dark-mode');
const container = document.querySelector('.container');

const isFullDarkMode = JSON.parse(localStorage.getItem('fullDarkModeChechbox'))
const iscontainedDarkMode = JSON.parse(localStorage.getItem('containedDarkModeCheckbox'))

if(isFullDarkMode) {
    fullDarkModeChechbox.checked = true
}
if(iscontainedDarkMode) {
    containedDarkModeCheckbox.checked = true
}
changeFullDarkMode()
changeContainedDarkMode()


fullDarkModeChechbox.addEventListener('change', () => {
    changeFullDarkMode()
    changeContainedDarkMode()
})

function changeFullDarkMode() {
    if(fullDarkModeChechbox.checked){
        document.body.classList.add('dark')
        localStorage.setItem('fullDarkModeChechbox', true)
    } else{
        document.body.classList.remove('dark')
        localStorage.setItem('fullDarkModeChechbox', false)
    }
    // containedDarkModeCheckbox.checked = fullDarkModeChechbox.checked

}

function changeContainedDarkMode() {
    if(containedDarkModeCheckbox.checked){
        container.classList.add('dark')
        localStorage.setItem('containedDarkModeCheckbox', true)
    } else{
        container.classList.remove('dark')
        localStorage.setItem('containedDarkModeCheckbox', false)
    }
}

    containedDarkModeCheckbox.addEventListener('change', changeContainedDarkMode)








