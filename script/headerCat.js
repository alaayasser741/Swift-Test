const cat1 =document.getElementById('cat-1');
const cat2 =document.getElementById('cat-2');
const cat3 =document.getElementById('cat-3');
const cat4 =document.getElementById('cat-4');
const cat5 =document.getElementById('cat-5');
const cat =document.getElementById('cat');
const table =document.getElementById('table');
const categories =document.querySelector('.categories');
cat1.addEventListener('click',()=>{
    cat.innerHTML=`
    <table>
    <thead>
        <tr>
            <th>WOMEN’S FASHION</th>
            <th>MEN’S FASHION</th>
            <th>KID’S FASHION</th>
            <th>BABY</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><a href="blouse.html">Blouses</a></td>
            <td><a href="T-shirt.html">T-Shirt</a></td>
            <td>Boys</td>
            <td>Baby Boys</td>
        </tr>
        <tr>
            <td><a href="dresses.html">Dresses</a></td>
            <td><a href="men-shirt.html">Shirts</a></td>
            <td>Girls</td>
            <td>Baby Girls</td>
        </tr>
        <tr>
            <td><a href="skirt.html">Skirts</a></td>
            <td><a href="men-short.html">Shorts</a></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td><a href="women-jeans.html">Jeans</a></td>
            <td><a href="menJeans.html">Jeans</a></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td><a href="Slippers.html">Slippers</a></td>
            <td>Slippers</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>Sneakers</td>
            <td>Sneakers</td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>
    `;
    categories.style.justifyContent = 'space-around';
})