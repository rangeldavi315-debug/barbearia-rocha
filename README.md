# Barbearia Rocha — Landing Page

Landing page de alta conversão para a Barbearia Rocha (Trindade — GO).

## Estrutura

```
/index.html
/css/style.css
/js/script.js
/assets/images/
/robots.txt
/sitemap.xml
```

## Como publicar

Este é um site estático (HTML/CSS/JS puro), sem build step. Basta enviar a pasta
inteira para qualquer hospedagem estática:

- **Vercel / Netlify**: arraste a pasta ou conecte um repositório Git.
- **Hospedagem tradicional (cPanel etc.)**: envie o conteúdo via FTP para `public_html`.

## Antes de colocar no ar, ajuste:

1. **Domínio real** — troque `https://www.barbeariarocha.com.br/` por o domínio
   definitivo em `index.html` (tags `canonical`, Open Graph, JSON-LD) e em
   `robots.txt` / `sitemap.xml`.
2. **Mais fotos na Galeria** — a seção `#galeria` tem um espaço reservado
   ("Mais fotos em breve"). Basta substituir o bloco `.soon-box` em
   `index.html` por uma nova `<figure>` com a foto real, seguindo o mesmo
   padrão das demais.
3. **Google Maps** — o botão "Como chegar" já aponta para uma busca no Google
   Maps a partir do endereço real. Se preferir, você pode trocar o link por
   um mapa incorporado (iframe) assim que tiver a URL oficial do Google Maps
   do local.
4. **Horários de funcionamento** — não foram informados, então não aparecem
   no site. Quando disponíveis, podem ser adicionados na seção de
   localização e no JSON-LD (`openingHoursSpecification`).

## Imagens

As imagens em `/assets/images/` já estão otimizadas (JPG + WebP, com versão
mobile do Hero) para carregamento rápido. Ao adicionar novas fotos, mantenha
o mesmo padrão: exporte um `.jpg` e um `.webp`.

## Contato usado no site

- WhatsApp: https://wa.me/556294906363
- Instagram: https://www.instagram.com/barbearia_rocha/
- Endereço: Rua João Marques, Parque dos Buritis, Trindade — GO
