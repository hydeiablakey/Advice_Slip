export const createAdvice = (advice) => {
    // const adviceText = document.getElementById('adviceResults'); 

    let paragraphEle = document.createElement("p");
    paragraphEle.classList.add('adviceStyle');

    paragraphEle.innerHTML = `${advice}`; 

    const messageContent = document.getElementById('msgResults');
    messageContent.append(paragraphEle); 

}

export const clearAdvice = () => {
    const results = document.getElementById('msgResults');

    while (results.firstChild) {
        results.firstChild.remove();
    }
}

// export const setMessage = (msg) => {
//     document.getElementById('errorMsg').textContent = msg; 
// }

