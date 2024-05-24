const ball = document.getElementById("ball");
document.addEventListener("keydown", handleKeyPress);
let pos = 0;

function handleKeyPress(e)
{
    if (e.code === 'KeyA')
        {
            pos -= 10;
        }
    if (e.code === 'KeyD')
        {
            pos += 10;
        }
    if (e.code === 'ArrowUp')
        {
            pos -= 10;
        }
    if (e.code === 'ArrowDown')
        {
            pos += 10;
        }
    if (pos < 0)
        {
            pos = 0;
        }
    refresh()
}

function refresh()
{
    ball.style.left = pos + 'px';
}