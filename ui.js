export const createAdvice = (advice) => {
    // const adviceText = document.getElementById('adviceResults'); 

    let paragraphEle = document.createElement("p");
    paragraphEle.classList.add('adviceStyle');

    paragraphEle.innerHTML = `${advice}`; 

    const messageContent = document.getElementById('msgResults');
    messageContent.append(paragraphEle); 

}

// export const setMessage = (msg) => {
//     document.getElementById('errorMsg').textContent = msg; 
// }

