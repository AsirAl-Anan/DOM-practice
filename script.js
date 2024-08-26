document.addEventListener('DOMContentLoaded', function() {
    const blogtitles = document.getElementsByTagName('h2');
    for (const title of blogtitles) {
        title.style.border = "1px solid black";
        title.style.color = 'blue';
        title.style.backgroundColor = "red";
    }

    const articles = document.getElementsByTagName('article');
    for (const article of articles) {
        article.style.backgroundColor = 'aqua';
    }

    // Create a new article element
    const article1 = document.createElement('article');

    // Create an h2 element with text
    const h2 = document.createElement('h2');
    const textOfH2 = document.createTextNode('Article 4');
    h2.appendChild(textOfH2);

    // Create a p element with text
    const para = document.createElement('p');
    const textNodeOfP = document.createTextNode('Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil iure veniam natus ad doloremque nesciunt vero aliquam, quae laboriosam. Saepe, voluptate. Consequuntur obcaecati perferendis id quasi esse iste reprehenderit rem ea ipsam eligendi sint labore distinctio delectus ad, hic repellendus?');
    para.appendChild(textNodeOfP);

    // Append the h2 and p elements to the article
    article1.appendChild(h2);
    article1.appendChild(para);

    // Append the newly created article to the body or any other container element
    document.body.appendChild(article1);
});
