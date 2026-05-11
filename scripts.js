const endereco = "https://api.groq.com/openai/v1/chat/completions";
const token = "SUA_CHAVE_GROQ";

const promptSystem = `Você é um designer web premiado e Programador. 
Crie uma landing page COMPLETA e VISUALMENTE IMPRESSIONANTE para o negócio descrito.
Regras de resposta:
- Responda SOMENTE com HTML e CSS puros dentro de um arquivo único.
- Não use markdown (como \`\`\`html).
- Não use tags <img>, use emojis grandes.
- Use CSS moderno: gradientes, animações e Google Fonts via @import.
- Conteúdo em português.`;

async function gerarCodigo() {
    const userInput = document.querySelector(".texto-pagina").value;
    const blocoCodigo = document.getElementById("blocoCodigo");
    const blocoSite = document.getElementById("blocoSite");
    const botao = document.getElementById("btnGerar");

    if (!userInput) {
        alert("Descreva o seu negócio para começar!");
        return;
    }

    // Estado de carregamento
    botao.innerText = "Criando...";
    botao.disabled = true;
    blocoCodigo.textContent = "A IA está desenhando seu site profissional...";

    try {
        const response = await fetch(endereco, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                "model": "llama-3.3-70b-versatile",
                "messages": [
                    { "role": "system", "content": promptSystem },
                    { "role": "user", "content": userInput }
                ],
                "temperature": 0.7
            })
        });

        const data = await response.json();

        if (data.error) throw new Error(data.error.message);

        let codGerado = data.choices[0].message.content;

        // Limpeza de Markdown (caso a IA ignore a regra)
        codGerado = codGerado.replace(/```html/g, "").replace(/```/g, "").trim();

        // Exibe o código e renderiza o site
        blocoCodigo.textContent = codGerado;
        blocoSite.srcdoc = codGerado;

    } catch (error) {
        console.error("Erro:", error);
        blocoCodigo.textContent = "Ops! Ocorreu um erro: " + error.message;
    } finally {
        botao.innerText = "Gerar";
        botao.disabled = false;
    }
}