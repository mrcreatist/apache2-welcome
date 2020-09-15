fetch('./data.json').then(r => r.json()).then(data => {

    // welcome message
    document.getElementById('heading').innerHTML += `${data.heading} <br> ${data.name}`;

    // projects
    data.projects.forEach(p => {
        const item = document.createElement('a');
        item.setAttribute('href', `${data.domain + (p.port ? `:${p.port}` : '') + (p.url ? `${p.url}` : '')}`);
        item.text = p.name;
        document.getElementById('project').appendChild(item);
    });
}); 