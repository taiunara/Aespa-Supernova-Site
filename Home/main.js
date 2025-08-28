document.addEventListener("DOMContentLoaded", function() {

    const membersList = document.getElementById("members-list");
    
    const descriptions = document.getElementById("descriptions");

    const memberTitle = document.getElementById("memberTitle");

    const memberImage = document.getElementById("member-image");

    const members = {
        karina: {
            image:"https://pbs.twimg.com/media/GM--y8pbUAAu6p9?format=jpg&name=4096x4096" // Substitua pela URL real da imagem
        },
        winter: {
            image: "https://pbs.twimg.com/media/GM54w69XMAAHqXS?format=jpg&name=large" // Substitua pela URL real da imagem
        },
        giselle: {
            image: "https://0.soompi.io/wp-content/uploads/2024/04/06081150/giselle-5.jpeg" // Substitua pela URL real da imagem
        },
        ningning: {

            image: "https://0.soompi.io/wp-content/uploads/2024/04/07081745/Ningning-6.jpeg" // Substitua pela URL real da imagem
        }
    };

    membersList.addEventListener("click", function(evento) {

        // Puxa o elemento exato que foi clicado (o alvo do evento). Esse target é uma referência ao elemento <li> que foi clicado.
        const target = evento.target;

        // Vai verificar se o que foi clicado é um elemento list item (li)
        if(target.tagName.toLowerCase() === "li") {

            // Puxa o que tiver dentro do "data-member" do nome do membro clicado
            const memberName = target.getAttribute("data-member");

            // Vai criar um id da descrição correspondente de cada membro, baseado no que tiver no data-member
            const descriptionId = `${memberName}-description`;

            // Puxa a descrição correta pelo id criado
            const description = document.getElementById(descriptionId);

            // Esconde todas as descrições
            const allDescriptions = descriptions.querySelectorAll(".description");
            allDescriptions.forEach(desc => desc.style.display = "none");
    

            // Mostra a descrição correspondente ao membro clicado
            if (description) {
                description.style.display =  "block";
                memberTitle.textContent = memberName.charAt(0).toUpperCase() + memberName.slice(1); // Capitalizar a primeira letrs
                memberImage.src = members[memberName].image;
                memberImage.style.display = "block";

            }

            }

        }
    
    
    )
    
});