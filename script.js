document.addEventListener("DOMContentLoaded", function() {
    const lewisBtn = document.getElementById("author-btn-1");
    const bio = document.getElementById("bio");

    // Define the list of books
    const booksList = `
        <ul>
            <li><a href="https://a.co/d/3vqEzee" target="_blank">The Lion, the Witch and the Wardrobe (1950)</a></li>
            <li><a href="https://a.co/d/54PzhWC" target="_blank">Prince Caspian (1951)</a></li>
            <li><a href="https://a.co/d/iVJTTj0" target="_blank">The Voyage of the Dawn Treader (1952)</a></li>
            <li><a href="https://a.co/d/dpnAVWU" target="_blank">The Silver Chair (1953)</a></li>
            <li><a href="https://a.co/d/bwwTdTD" target="_blank">The Horse and His Boy (1954)</a></li>
            <li><a href="https://a.co/d/2sbpp3o" target="_blank">The Magician’s Nephew (1955)</a></li>
            <li><a href="https://a.co/d/eafYuMW" target="_blank">The Last Battle (1956)</a></li>
        </ul>
    `;

    // Define the original bio content
    const originalBio = `<b>C.S. Lewis</b> was that rare mix of a deep thinker and a fantastic storyteller—the kind of guy who could debate theology in the morning and then spend the afternoon writing about talking lions and magical wardrobes. Best known for The Chronicles of Narnia, he introduced generations of readers to a world where kids become kings, witches fear Christmas, and beavers serve tea.`;

    // Add event listener to the button
    lewisBtn.addEventListener("click", function() {
        // Check if the content is currently showing books or bio
        if (bio.innerHTML === originalBio) {
            // Change the bio to the list of books
            bio.innerHTML = booksList;
            // Change button text to "Exit"
            lewisBtn.innerHTML = "Exit <i class='fas fa-book'></i>";
        } else {
            // Change the content back to the bio
            bio.innerHTML = originalBio;
            // Change button text back to "Discover his work!"
            lewisBtn.innerHTML = "Discover his work! <i class='fas fa-book'></i>";
        }
    });

const tolkienBtn = document.getElementById("author-btn-2");
const tolkienBio = tolkienBtn.previousElementSibling.querySelector("p");

const tolkienBooks = `
    <ul>
        <li><a href="https://a.co/d/dpmG4VV" target="_blank">The Hobbit (1937)</a></li>
        <li><a href="" target="_blank">The Fellowship of the Ring (1954)</a></li>
        <li><a href="https://a.co/d/cTKUSve" target="_blank">The Two Towers (1954)</a></li>
        <li><a href="https://a.co/d/ag2H5X2" target="_blank">The Return of the King (1955)</a></li>
        <li><a href="https://a.co/d/8Bg3FmE" target="_blank">The Silmarillion (1977)</a></li>
        <li><a href="https://a.co/d/bLrC2Ck" target="_blank">Unfinished Tales (1980)</a></li>
        <li><a href="https://a.co/d/03HyYsT" target="_blank">The Children of Húrin (2007)</a></li>
        <li><a href="https://a.co/d/fbp0KHl" target="_blank">Beren and Lúthien (2017)</a></li>
        <li><a href="https://a.co/d/3EBLnW6" target="_blank">The Fall of Gondolin (2018)</a></li>
    </ul>`;

const originalTolkienBio = tolkienBio.innerHTML;

tolkienBtn.addEventListener("click", () => {
    if (tolkienBtn.innerText.includes("Discover")) {
        tolkienBio.innerHTML = tolkienBooks;
        tolkienBtn.innerHTML = 'Exit <i class="fas fa-times"></i>';
    } else {
        tolkienBio.innerHTML = originalTolkienBio;
        tolkienBtn.innerHTML = 'Discover his work! <i class="fas fa-book"></i>';
    }
});

const martinBtn = document.getElementById("author-btn-3");
const martinBio = martinBtn.previousElementSibling.querySelector("p");

const martinBooks = `
    <ul>
        <li><a href="https://a.co/d/8X0HGzQ" target="_blank">A Game of Thrones (1996)</a></li>
        <li><a href="https://a.co/d/7vTzJfH" target="_blank">A Clash of Kings (1998)</a></li>
        <li><a href="https://a.co/d/8AKVMDu" target="_blank">A Storm of Swords (2000)</a></li>
        <li><a href="https://a.co/d/19oEwnp" target="_blank">A Feast for Crows (2005)</a></li>
        <li><a href="https://a.co/d/8yeOX0i" target="_blank">A Dance with Dragons (2011)</a></li>
        <li><a href="https://a.co/d/jkQCtmt" target="_blank">Fire & Blood (2018)</a></li>
        <li><a href="https://a.co/d/4CbH2O2" target="_blank">The Rise of the Dragon (2022)</a></li>
    </ul>`;

const originalMartinBio = martinBio.innerHTML;

martinBtn.addEventListener("click", () => {
    if (martinBtn.innerText.includes("Discover")) {
        martinBio.innerHTML = martinBooks;
        martinBtn.innerHTML = 'Exit <i class="fas fa-times"></i>';
    } else {
        martinBio.innerHTML = originalMartinBio;
        martinBtn.innerHTML = 'Discover his work! <i class="fas fa-book"></i>';
    }
});

const dostoevskyBtn = document.getElementById("author-btn-4");
const dostoevskyBio = dostoevskyBtn.previousElementSibling.querySelector("p");

const dostoevskyBooks = `
    <ul>
        <li><a href="https://a.co/d/hVumeyC" target="_blank">Crime and Punishment (1866)</a></li>
        <li><a href="https://a.co/d/fzCZ0pS" target="_blank">The Idiot (1869)</a></li>
        <li><a href="https://a.co/d/eZqIlmA" target="_blank">Demons (1872)</a></li>
        <li><a href="https://a.co/d/bwNxLJB" target="_blank">The Brothers Karamazov (1880)</a></li>
        <li><a href="https://a.co/d/bnVDsyY" target="_blank">Notes from Underground (1864)</a></li>
    </ul>`;

const originalDostoevskyBio = dostoevskyBio.innerHTML;

dostoevskyBtn.addEventListener("click", () => {
    if (dostoevskyBtn.innerText.includes("Discover")) {
        dostoevskyBio.innerHTML = dostoevskyBooks;
        dostoevskyBtn.innerHTML = 'Exit <i class="fas fa-times"></i>';
    } else {
        dostoevskyBio.innerHTML = originalDostoevskyBio;
        dostoevskyBtn.innerHTML = 'Discover his work! <i class="fas fa-book"></i>';
    }
});

const tarttBtn = document.getElementById("author-btn-5");
const tarttBio = tarttBtn.previousElementSibling.querySelector("p");

const tarttBooks = `
    <ul>
        <li><a href="https://www.takealot.com/secret-history/PLID34590343" target="_blank">The Secret History (1992)</a></li>
        <li><a href="https://a.co/d/2p6bpb6" target="_blank">The Little Friend (2002)</a></li>
        <li><a href="https://a.co/d/cPm9ofQ" target="_blank">The Goldfinch (2013)</a></li>
    </ul>`;

const originalTarttBio = tarttBio.innerHTML;

tarttBtn.addEventListener("click", () => {
    if (tarttBtn.innerText.includes("Discover")) {
        tarttBio.innerHTML = tarttBooks;
        tarttBtn.innerHTML = 'Exit <i class="fas fa-times"></i>';
    } else {
        tarttBio.innerHTML = originalTarttBio;
        tarttBtn.innerHTML = 'Discover her work! <i class="fas fa-book"></i>';
    }
});

const sandersonBtn = document.getElementById("author-btn-6");
const sandersonBio = sandersonBtn.previousElementSibling.querySelector("p");

const sandersonBooks = `
    <ul>
        <li><a href="https://amzn.eu/d/f8H1g6P" target="_blank">Mistborn: The Final Empire (2006)</a></li>
        <li><a href="https://amzn.eu/d/8vC8HEk" target="_blank">The Well of Ascension (2007)</a></li>
        <li><a href="https://amzn.eu/d/fMgYAG8" target="_blank">The Hero of Ages (2008)</a></li>
        <li><a href="https://amzn.eu/d/0TUQRD8" target="_blank">The Way of Kings (2010)</a></li>
        <li><a href="https://amzn.eu/d/6rCM9Q2" target="_blank">Words of Radiance (2014)</a></li>
        <li><a href="https://amzn.eu/d/5LxrATj" target="_blank">Rhythm of War (2020)</a></li>
    </ul>`;

const originalSandersonBio = sandersonBio.innerHTML;

sandersonBtn.addEventListener("click", () => {
    if (sandersonBtn.innerText.includes("Discover")) {
        sandersonBio.innerHTML = sandersonBooks;
        sandersonBtn.innerHTML = 'Exit <i class="fas fa-times"></i>';
    } else {
        sandersonBio.innerHTML = originalSandersonBio;
        sandersonBtn.innerHTML = 'Discover his work! <i class="fas fa-book"></i>';
    }
});


const sapkowskiBtn = document.getElementById("author-btn-7");
const sapkowskiBio = sapkowskiBtn.previousElementSibling.querySelector("p");

const sapkowskiBooks = `
    <ul>
        <li><a href="https://amzn.eu/d/7PMWgF3" target="_blank">The Last Wish (1993)</a></li>
        <li><a href="https://amzn.eu/d/gI0HVXS" target="_blank">Sword of Destiny (1992)</a></li>
        <li><a href="https://amzn.eu/d/4MTcXfS" target="_blank">Blood of Elves (1994)</a></li>
        <li><a href="https://amzn.eu/d/cYySbmL" target="_blank">Time of Contempt (1995)</a></li>
        <li><a href="https://amzn.eu/d/74NB1TY" target="_blank">Baptism of Fire (1996)</a></li>
        <li><a href="https://amzn.eu/d/dGSLDAT" target="_blank">The Tower of the Swallow (1997)</a></li>
        <li><a href="https://amzn.eu/d/3meNGJZ" target="_blank">The Lady of the Lake (1999)</a></li>
        <li><a href="https://amzn.eu/d/6mmsWG4" target="_blank">Season of Storms (2013)</a></li>
    </ul>`;

const originalSapkowskiBio = sapkowskiBio.innerHTML;

sapkowskiBtn.addEventListener("click", () => {
    if (sapkowskiBtn.innerText.includes("Discover")) {
        sapkowskiBio.innerHTML = sapkowskiBooks;
        sapkowskiBtn.innerHTML = 'Exit <i class="fas fa-times"></i>';
    } else {
        sapkowskiBio.innerHTML = originalSapkowskiBio;
        sapkowskiBtn.innerHTML = 'Discover his work! <i class="fas fa-book"></i>';
    }
});

});
