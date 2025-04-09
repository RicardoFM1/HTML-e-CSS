function init(){
    const main = document.createElement("main")
    const body = document.querySelector("body")
    body.append(main)
    
    const h1 = document.createElement("h1")
    h1.innerText = "NETFLIX"
    main.append(h1)

    const h2 = document.createElement("h2")
    h2.innerText = "Quem está assistindo?"
    main.append(h2)
 
    const ul = document.createElement("ul")
    
    const li = document.createElement("li")
    const li2 = document.createElement("li")
    const li3 = document.createElement("li")
    const li4 = document.createElement("li")
    const li5 = document.createElement("li")
    
    const p = document.createElement("p")
    const p2 = document.createElement("p")
    const p3 = document.createElement("p")
    const p4 = document.createElement("p")
    const p5 = document.createElement("p")
    p.innerText = "Ricardo"
    p2.innerText = "Felipe"
    p3.innerText = "Marcos"
    p4.innerText = "Lucas"
    p5.innerText = "Rafael"
    
    
    const img = document.createElement("img")
    const img2 = document.createElement("img")
    const img3 = document.createElement("img")
    const img4 = document.createElement("img")
    const img5 = document.createElement("img")
    img.src = "perfil netflix.jpg"
    img2.src = "perfil netflix2.jpg"
    img3.src = "perfil netflix3.jpg"
    img4.src = "perfil netflix4.jpg"
    img5.src = "perfil netflix5.jpg"

    main.append(ul)
    ul.append(li,li2,li3,li4,li5)
    
    li.append(img, p)
    li2.append(img2, p2)
    li3.append(img3, p3)
    li4.append(img4, p4)
    li5.append(img5, p5)

    const button = document.createElement("button")
    const pbutton = document.createElement("p")
    button.innerText = "Gerenciar perfis"
    main.append(button)


    
}
init()