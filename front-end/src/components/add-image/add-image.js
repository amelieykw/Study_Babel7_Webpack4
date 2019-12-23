import TeamEmerald from './teamEmerald.jpg';

function addImage() {
    const img = document.createElement('img');
    img.alt = 'Team Emerald';
    img.width = 300;
    img.src = TeamEmerald;

    const body = document.querySelector('body');
    body.appendChild(img);
}

export default addImage;