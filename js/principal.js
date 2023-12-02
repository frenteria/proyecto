const productos = [
    { Nombre: "ASUS B760M", Categoria: "Motherboard", Marca: "ASUS", Precio: 649000, RAM: "64GB", Garantia: "3 AÑOS", Procesador: "Intel", Almacenamiento: "N/A", Año: 2023, Imagen: "https://dlcdnwebimgs.asus.com/gain/59b1f230-39da-495a-9a57-4d35fa1562b4/" },
    { Nombre: "ASUS Z690", Categoria: "Motherboard", Marca: "ASUS", Precio: 1049000, RAM: "64GB", Garantia: "2 AÑOS", Procesador: "Intel", Almacenamiento: "N/A", Año: 2023, Imagen: "https://dlcdnwebimgs.asus.com/gain/1ff2e527-a666-4ada-ad72-a639e59af342/" },
    { Nombre: "GIGABYTE Z590", Categoria: "Motherboard", Marca: "GYGABYTE", Precio: 759000, RAM: "64GB", Garantia: "2 AÑOS", Procesador: "Intel", Almacenamiento: "N/A", Año: 2022, Imagen: "https://www.gigabyte.com/FileUpload/Global/KeyFeature/1725/innergigabyteimages/specsmall.jpg" },
    { Nombre: "MSI Z590", Categoria: "Motherboard", Marca: "MSI", Precio: 799000, RAM: "64GB", Garantia: "4 AÑOS", Procesador: "Intel", Almacenamiento: "N/A", Año: 2023, Imagen: "https://storage-asset.msi.com/global/picture/image/feature/mb/Z590/MPG/gaming-plus/story_img.png" },
    { Nombre: "ASUS A320", Categoria: "Motherboard", Marca: "ASUS", Precio: 274000, RAM: "32GB", Garantia: "2 AÑOS", Procesador: "AMD", Almacenamiento: "N/A", Año: 2022, Imagen: "https://speedlogic.com.co/wp-content/uploads/2020/10/34017.png" },
    { Nombre: "ASUS B450M", Categoria: "Motherboard", Marca: "ASUS", Precio: 399000, RAM: "32GB", Garantia: "3 AÑOS", Procesador: "AMD", Almacenamiento: "N/A", Año: 2021, Imagen: "https://speedlogic.com.co/wp-content/uploads/2023/05/34156.1.png" },
    { Nombre: "MSI PRO A520M", Categoria: "Motherboard", Marca: "MSI", Precio: 309000, RAM: "32GB", Garantia: "4 AÑOS", Procesador: "AMD", Almacenamiento: "N/A", Año: 2022, Imagen: "https://speedlogic.com.co/wp-content/uploads/2021/11/34179.1.png" },
    { Nombre: "GYGABYTE B650M", Categoria: "Motherboard", Marca: "GYGABYTE", Precio: 839000, RAM: "64GB", Garantia: "3 AÑOS", Procesador: "AMD", Almacenamiento: "N/A", Año: 2021, Imagen: "https://speedlogic.com.co/wp-content/uploads/2023/10/34250.1.png" },
    { Nombre: "SPEED 51081", Categoria: "PC Gamer", Marca: "SPEED", Precio: 2199000, RAM: "16GB", Garantia: "5 AÑOS", Procesador: "AMD", Almacenamiento: "1 TB", Año: 2023, Imagen: "https://cdnx.jumpseller.com/compuelite/image/39017808/thumb/610/610?1697570732" },
    { Nombre: "ASUS VIVOBOOK E1504FA", Categoria: "Portatil", Marca: "ASUS", Precio: 1890000, RAM: "16GB", Garantia: "4 AÑOS", Procesador: "AMD", Almacenamiento: "512 GB", Año: 2021, Imagen: "https://speedlogic.com.co/wp-content/uploads/2023/07/52171.png" },
    { Nombre: "ACER NITRO 5 AN515", Categoria: "Portatil", Marca: "ACER", Precio: 3399000, RAM: "8GB", Garantia: "5 AÑOS", Procesador: "Intel", Almacenamiento: "512 GB", Año: 2021, Imagen: "https://speedlogic.com.co/wp-content/uploads/2023/04/52164.3-1.png" },
    { Nombre: "ACER ASPIRE 3 A315", Categoria: "Portatil", Marca: "ACER", Precio: 2099000, RAM: "8GB", Garantia: "2 AÑOS", Procesador: "AMD", Almacenamiento: "512 GB", Año: 2022, Imagen: "https://speedlogic.com.co/wp-content/uploads/2023/08/52177.png" },
    { Nombre: "ASUS VIVOBOOK X1605EA", Categoria: "Portatil", Marca: "ASUS", Precio: 1799000, RAM: "8GB", Garantia: "2 AÑOS", Procesador: "AMD", Almacenamiento: "512 GB", Año: 2021, Imagen: "https://speedlogic.com.co/wp-content/uploads/2023/09/52188.png" },
    { Nombre: "ASUS VIVOBOOK OLED M3500QC", Categoria: "Portatil", Marca: "ASUS", Precio: 4190000, RAM: "16GB", Garantia: "3 AÑOS", Procesador: "AMD", Almacenamiento: "1 TB", Año: 2022, Imagen: "https://speedlogic.com.co/wp-content/uploads/2023/09/52190.png" },
    { Nombre: "ASUS ROG STRIX G315", Categoria: "Portatil", Marca: "ASUS", Precio: 5890000, RAM: "16GB", Garantia: "3 AÑOS", Procesador: "AMD", Almacenamiento: "512 GB", Año: 2022, Imagen: "https://speedlogic.com.co/wp-content/uploads/2022/05/52114.4.png" },
    { Nombre: "GYGABYTE G5", Categoria: "Portatil", Marca: "GYGABYTE", Precio: 4940000, RAM: "16GB", Garantia: "3 AÑOS", Procesador: "AMD", Almacenamiento: "1 TB", Año: 2023, Imagen: "https://speedlogic.com.co/wp-content/uploads/2023/08/52180.png" },
    { Nombre: "GYGABYTE AERO 17", Categoria: "Portatil", Marca: "GYGABYTE", Precio: 3596000, RAM: "16GB", Garantia: "2 AÑOS", Procesador: "Intel", Almacenamiento: "512 GB", Año: 2021, Imagen: "https://m.media-amazon.com/images/I/71vGsA5sVuS.jpg" },
    { Nombre: "HP 14-EM0009LA", Categoria: "Portatil", Marca: "HP", Precio: 1850000, RAM: "8GB", Garantia: "2 AÑOS", Procesador: "Intel", Almacenamiento: "512 GB", Año: 2021, Imagen: "https://compucentro.co/wp-content/uploads/c08509100.jpg" },
    { Nombre: "HP PAVILION 15-DK", Categoria: "Portatil", Marca: "HP", Precio: 2890000, RAM: "8GB", Garantia: "3 AÑOS", Procesador: "Intel", Almacenamiento: "256 GB", Año: 2022, Imagen: "https://speedlogic.com.co/wp-content/uploads/2023/07/52174.png" },
    { Nombre: "HUAWEI MATEBOOK X PRO", Categoria: "Portatil", Marca: "HUAWEI", Precio: 3990000, RAM: "16GB", Garantia: "3 AÑOS", Procesador: "Intel", Almacenamiento: "512 GB", Año: 2020, Imagen: "https://speedlogic.com.co/wp-content/uploads/2023/07/52153.png" },
    { Nombre: "LENOVO IP 3-14", Categoria: "Portatil", Marca: "LENOVO", Precio: 1290000, RAM: "8GB", Garantia: "3 AÑOS", Procesador: "AMD", Almacenamiento: "256 GB", Año: 2021, Imagen: "https://speedlogic.com.co/wp-content/uploads/2023/09/52192.png" },
    { Nombre: "MSI KATANA 17", Categoria: "Portatil", Marca: "MSI", Precio: 5540000, RAM: "16GB", Garantia: "2 AÑOS", Procesador: "Intel", Almacenamiento: "512 GB", Año: 2022, Imagen: "https://speedlogic.com.co/wp-content/uploads/2023/07/52173.png" },
    { Nombre: "GSKILL TRIDENT Z", Categoria: "Memoria RAM", Marca: "GSKILL", Precio: 145000, RAM: "8GB", Garantia: "3 AÑOS", Procesador: "N/A", Almacenamiento: "N/A", Año: 2019, Imagen: "https://www.mrpc.com.co/wp-content/uploads/2023/06/002-15.png" },
    { Nombre: "KINGSTON FURY BEAST", Categoria: "Memoria RAM", Marca: "KINGSTON", Precio: 185000, RAM: "16GB", Garantia: "4 AÑOS", Procesador: "N/A", Almacenamiento: "N/A", Año: 2021, Imagen: "https://speedlogic.com.co/wp-content/uploads/2021/08/5315.png" },
    { Nombre: "PNY XLRB", Categoria: "Memoria RAM", Marca: "PNY", Precio: 160000, RAM: "16GB", Garantia: "3 AÑOS", Procesador: "N/A", Almacenamiento: "N/A", Año: 2022, Imagen: "https://gamingfactory.com.co/wp-content/uploads/2021/06/XLR8.jpg" },
    { Nombre: "GSKILL ROYAL TRIDENT Z-NEO X2", Categoria: "Memoria RAM", Marca: "GSKILL", Precio: 819000, RAM: "32GB", Garantia: "2 AÑOS", Procesador: "N/A", Almacenamiento: "N/A", Año: 2020, Imagen: "https://zeropar.com/wp-content/uploads/2020/12/neo.jpg" },
    { Nombre: "VIPER PATRIOT STEEL", Categoria: "Memoria RAM", Marca: "VIPER PATRIOT", Precio: 115000, RAM: "8GB", Garantia: "1 AÑO", Procesador: "N/A", Almacenamiento: "N/A", Año: 2019, Imagen: "https://speedlogic.com.co/wp-content/uploads/2023/08/6112.png" },
    { Nombre: "GSKILL ROYAL SILVER", Categoria: "Memoria RAM", Marca: "GSKILL", Precio: 456000, RAM: "32GB", Garantia: "4 AÑOS", Procesador: "N/A", Almacenamiento: "N/A", Año: 2021, Imagen: "https://pcmastersbogota.com.co/wp-content/uploads/2021/07/71ZsNlCFkgL._AC_SL1300_.jpg" },
    { Nombre: "INTEL CORE I5 10GEN", Categoria: "Procesador", Marca: "INTEL", Precio: 629000, RAM: "N/A", Garantia: "3 AÑOS", Procesador: "I5 10400", Almacenamiento: "N/A", Año: 2021, Imagen: "https://i.linio.com/p/9877e076e8029674167abd60322098d7-product.jpg" },
    { Nombre: "INTEL CORE I5 11GEN", Categoria: "Procesador", Marca: "INTEL", Precio: 729000, RAM: "N/A", Garantia: "2 AÑOS", Procesador: "I5 11400", Almacenamiento: "N/A", Año: 2022, Imagen: "https://speedlogic.com.co/wp-content/uploads/2023/07/1078.png" },
    { Nombre: "INTEL CORE I3 12GEN", Categoria: "Procesador", Marca: "INTEL", Precio: 609000, RAM: "N/A", Garantia: "3 AÑOS", Procesador: "I3 12100", Almacenamiento: "N/A", Año: 2023, Imagen: "https://speedlogic.com.co/wp-content/uploads/2023/07/1108.png" },
    { Nombre: "INTEL CORE I7 11GEN", Categoria: "Procesador", Marca: "INTEL", Precio: 890000, RAM: "N/A", Garantia: "2 AÑOS", Procesador: "I7 11700F", Almacenamiento: "N/A", Año: 2022, Imagen: "https://speedlogic.com.co/wp-content/uploads/2023/07/1082.png" },
    { Nombre: "INTEL CORE I7 12GEN", Categoria: "Procesador", Marca: "INTEL", Precio: 1369000, RAM: "N/A", Garantia: "3 AÑOS", Procesador: "I7 12700F", Almacenamiento: "N/A", Año: 2023, Imagen: "https://speedlogic.com.co/wp-content/uploads/2023/07/1106.png" },
    { Nombre: "INTEL CORE I9 12GEN", Categoria: "Procesador", Marca: "INTEL", Precio: 2490000, RAM: "N/A", Garantia: "4 AÑOS", Procesador: "I9 12900", Almacenamiento: "N/A", Año: 2023, Imagen: "https://speedlogic.com.co/wp-content/uploads/2023/07/1104.png" },
    { Nombre: "RYZEN 5 4GEN", Categoria: "Procesador", Marca: "AMD", Precio: 499000, RAM: "N/A", Garantia: "4 AÑOS", Procesador: "RYZEN 5 4600G ", Almacenamiento: "N/A", Año: 2021, Imagen: "https://speedlogic.com.co/wp-content/uploads/2023/07/2075.png" },
    { Nombre: "RYZEN 5 5GEN", Categoria: "Procesador", Marca: "AMD", Precio: 799000, RAM: "N/A", Garantia: "3 AÑOS", Procesador: "RYZEN 5 5600X", Almacenamiento: "N/A", Año: 2022, Imagen: "https://speedlogic.com.co/wp-content/uploads/2023/07/2075.png" },
    { Nombre: "RYZEN 7 5GEN", Categoria: "Procesador", Marca: "AMD", Precio: 889000, RAM: "N/A", Garantia: "1 AÑO", Procesador: "RYZEN 7 5700G", Almacenamiento: "N/A", Año: 2022, Imagen: "https://speedlogic.com.co/wp-content/uploads/2023/07/2069.png" },
    { Nombre: "RYZEN 5 7GEN", Categoria: "Procesador", Marca: "AMD", Precio: 1099000, RAM: "N/A", Garantia: "4 AÑOS", Procesador: "RYZEN 5 7600", Almacenamiento: "N/A", Año: 2023, Imagen: "https://speedlogic.com.co/wp-content/uploads/2023/07/2079.png" },
    { Nombre: "RYZEN 7 7GEN", Categoria: "Procesador", Marca: "AMD", Precio: 1590000, RAM: "N/A", Garantia: "3 AÑOS", Procesador: "RYZEN 7 7700X", Almacenamiento: "N/A", Año: 2023, Imagen: "https://speedlogic.com.co/wp-content/uploads/2023/07/2079.png" },
    { Nombre: "RYZEN 9 7GEN", Categoria: "Procesador", Marca: "AMD", Precio: 2079000, RAM: "N/A", Garantia: "5 AÑOS", Procesador: "RYZEN 9 7900", Almacenamiento: "N/A", Año: 2023, Imagen: "https://tiendainformatica.co/wp-content/uploads/2023/06/PRO-AM5-RYZEN-9-7900-3.7-76-MB-CACHE.png" },
    { Nombre: "IPHONE 15", Categoria: "Celular", Marca: "APPLE", Precio: 4599000, RAM: "6GB", Garantia: "1 AÑO", Procesador: "A16 BIONIC", Almacenamiento: "128 GB", Año: 2023, Imagen: "https://mac-center.com/cdn/shop/files/iPhone15_Black_PDP_Image_Position-1__COES_713x.jpg?v=1695221246" },
    { Nombre: "IPHONE 15 PLUS", Categoria: "Celular", Marca: "APPLE", Precio: 6799000, RAM: "6GB", Garantia: "1 AÑO", Procesador: "A17 BIONIC", Almacenamiento: "512 GB", Año: 2023, Imagen: "https://tiendasishop.com/media/catalog/product/i/p/iphone15_plus_black_pdp_image_position-1__coes_2.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700" },
    { Nombre: "IPHONE 14 PRO", Categoria: "Celular", Marca: "APPLE", Precio: 8599000, RAM: "8GB", Garantia: "2 AÑOS", Procesador: "A16 BIONIC", Almacenamiento: "1 TB", Año: 2022, Imagen: "https://cdn-files.kimovil.com/phone_front/0007/75/thumb_674765_phone_front_big.png" },
    { Nombre: "SAMSUNG GALAXY A54", Categoria: "Celular", Marca: "SAMSUNG", Precio: 1499900, RAM: "6GB", Garantia: "2 AÑOS", Procesador: "EXYNOS", Almacenamiento: "128 GB", Año: 2022, Imagen: "https://cdn-files.kimovil.com/phone_front/0008/50/thumb_749417_phone_front_big.jpg" },
    { Nombre: "SAMSUNG GALAXY S23 PLUS", Categoria: "Celular", Marca: "SAMSUNG", Precio: 4999900, RAM: "8GB", Garantia: "1 AÑO", Procesador: "SNAPDRAGON", Almacenamiento: "256 GB", Año: 2022, Imagen: "https://cdn-files.kimovil.com/phone_front/0008/33/thumb_732861_phone_front_big.jpg" },
    { Nombre: "SAMSUNG GALXY ZFLIP 4", Categoria: "Celular", Marca: "SAMSUNG", Precio: 3949000, RAM: "8GB", Garantia: "1 AÑO", Procesador: "SNAPDRAGON", Almacenamiento: "128 GB", Año: 2021, Imagen: "https://cdn-files.kimovil.com/default/0007/65/thumb_664199_default_big.png" },
    { Nombre: "UNIDAD SSD SATA", Categoria: "Disco Duro", Marca: "KINGSTON", Precio: 144000, RAM: "N/A", Garantia: "2 AÑOS", Procesador: "N/A", Almacenamiento: "480 GB", Año: 2019, Imagen: "https://speedlogic.com.co/wp-content/uploads/2020/09/12031.png" },
    { Nombre: "SSD M2 NVME AORUS", Categoria: "Disco Duro", Marca: "GYGABYTE", Precio: 109000, RAM: "N/A", Garantia: "2 AÑOS", Procesador: "N/A", Almacenamiento: "256 GB", Año: 2020, Imagen: "https://speedlogic.com.co/wp-content/uploads/2020/10/13073.png" },
    { Nombre: "SSD M2 NVME P300", Categoria: "Disco Duro", Marca: "PATRIOT", Precio: 165000, RAM: "N/A", Garantia: "3 AÑOS", Procesador: "N/A", Almacenamiento: "1 TB", Año: 2021, Imagen: "https://speedlogic.com.co/wp-content/uploads/2023/02/13147.png" },
    { Nombre: "ASUS ROGSTRIX 4060TI", Categoria: "Tarjeta Grafica", Marca: "ASUS", Precio: 1979000, RAM: "8GB", Garantia: "2 AÑOS", Procesador: "NVIDIA", Almacenamiento: "N/A", Año: 2022, Imagen: "https://storage-asset.msi.com/global/picture/image/feature/vga/NVIDIA/RTX-4060-Ti-VENTUS/VENTUS-3X-8G/performance-img.png" },
    { Nombre: "ASUS TUF RX7700XT", Categoria: "Tarjeta Grafica", Marca: "ASUS", Precio: 2329000, RAM: "12GB", Garantia: "2 AÑOS", Procesador: "RADEON", Almacenamiento: "N/A", Año: 2023, Imagen: "https://speedlogic.com.co/wp-content/uploads/2023/11/4160.1.png" },
];

const productosMostrados = 10;
let paginaActual = 0;

function verTabla(product) {
    const tabla = document.getElementById("main__tabla--body");
    tabla.innerHTML = '';
    const inicio = paginaActual * productosMostrados;
    const fin = Math.min(inicio + productosMostrados, product.length);

    for (let i = inicio; i < fin; i++) {
        let producto = product[i];
        let fila = tabla.insertRow();
        let celdaNombre = fila.insertCell(0);
        let celdaCategoria = fila.insertCell(1);
        let celdaMarca = fila.insertCell(2);
        let celdaPrecio = fila.insertCell(3);
        let celdaProcesador = fila.insertCell(4);
        let celdaAccion = fila.insertCell(5);

        // Asigno a cada celda la propiedad de cada objeto
        celdaNombre.innerHTML = producto.Nombre;
        celdaCategoria.innerHTML = producto.Categoria;
        celdaMarca.innerHTML = producto.Marca;
        celdaPrecio.innerHTML = producto.Precio;
        celdaProcesador.innerHTML = producto.Procesador;

        let idProducto = `producto_${i}`;
        producto.id = idProducto;

        let enlaceVerMas = document.createElement("a");
        enlaceVerMas.href = "#";
        enlaceVerMas.textContent = "Ver más";
        enlaceVerMas.addEventListener("click", function () {
            mostrarDetalle(idProducto, product);
        });
        celdaAccion.appendChild(enlaceVerMas);

    }
    actualizarBotonesPaginacion();
}
verTabla(productos);


function asignarMarcas() {
    /*
    Creo un variable que va a contener un .map para traer 
    todos los valores del atributo marca que existan dentro
    del array de productos, y luego con el new Set los guardo
    en un array que no va a tomar valores repetidos
    */
    const categoriasFiltro = new Set(productos.map(producto => producto.Marca));
    /*
    Hago un forEach para el array que tiene las marcas y asigno un argumento 
    nombre, luego invoco el metodo createElement para crear options y 
    a cada option le asigno texto y valor el cual es nombre
    y por ultimo inserto dentro del aside del html los options creados
    */
    const marcas = document.getElementById('aside__select--2');
    categoriasFiltro.forEach(function (nombre) {
        let option = document.createElement('option');
        option.text = nombre;
        option.value = nombre;
        marcas.appendChild(option);
    });
}
asignarMarcas();

document.getElementById("aside__btn--aplicar").addEventListener("click", function () {
    ;
    //Traigo el select que este selleccionado al momento de llamar la funcion
    const select1 = document.getElementById("aside__select--1");
    const select2 = document.getElementById("aside__select--2");

    //Hago una copia de array principal
    const copiaArray = productos.slice(0, productos.length);
    /*Le aplico .filter a la copia de array y selecciono solo los
     objetos que en su atributo categoria coincidan con el filtro seleccionado
    */
    const productosFiltrados = copiaArray.filter(producto => (producto.Categoria === select1.value) && producto.Marca === select2.value);
    verTabla(productosFiltrados);
    actualizarBotonesPaginacion();
})


document.getElementById("aside__btn--borrar").addEventListener("click", function () {
    paginaActual = 0;
    verTabla(productos);
    mostrarSubindice();
});
function irAtras() {
    if (paginaActual > 0) {
        paginaActual--;
        verTabla(productos);    
        mostrarSubindice();
        actualizarBotonesPaginacion();
    }
}

function irAdelante() {
    const ultimaPagina = Math.ceil(productos.length / productosMostrados) - 1;
    if (paginaActual < ultimaPagina) {
        paginaActual++;
        verTabla(productos);
        mostrarSubindice();
        actualizarBotonesPaginacion();
    }
}




function mostrarSubindice() {
    const totalPaginas = Math.ceil(productos.length / productosMostrados);
    const subindice = document.getElementById("pagina__actual");
    subindice.textContent = `Pagina ${paginaActual + 1}`;
}

function mostrarDetalle(idProducto, productA) {
    //Recibe el id del producto y el array que lo contenga
    const modal = document.getElementById("modalProducto");
    //cambio el estado del modal a visible
    modal.classList.remove("hidden");
    modal.classList.add("visible");

    //Traigo los inputs del HTML
    const nombreIn = document.getElementById("nombre__producto");
    const imagenIn = document.getElementById("imagen__producto");
    const categoriaIn = document.getElementById("categoria__producto");
    const marcaIn = document.getElementById("marca__producto");
    const precioIn = document.getElementById("precio__producto");
    const ramIn = document.getElementById("ram__producto");
    const garantiaIn = document.getElementById("garantia__producto");
    const procesadorIn = document.getElementById("procesador__producto");
    const almacenamientoIn = document.getElementById("almacenamiento__producto");
    const añoIn = document.getElementById("año__producto");

    //Busco en el array que contenga al producto que contenga la id especifica del mismo
    const product = productA.find(producto => producto.id === idProducto);

    //Muestro los atributos que encontro en los inputs
    nombreIn.value = product.Nombre;
    imagenIn.src = product.Imagen;
    categoriaIn.value = product.Categoria;
    marcaIn.value = product.Marca;
    precioIn.value = product.Precio;
    ramIn.value = product.RAM;
    garantiaIn.value = product.Garantia;
    procesadorIn.value = product.Procesador;
    almacenamientoIn.value = product.Almacenamiento;
    añoIn.value = product.Año;

}
document.getElementById("modal__btn--regresar").addEventListener("click", function () {
    window.location.href = "lista.html";
});


function actualizar() {
    const modal = document.getElementById("modalProducto");
    const newNombre = document.getElementById("nombre__producto").value;
    const newCategoria = document.getElementById("categoria__producto").value;
    const newMarca = document.getElementById("marca__producto").value;
    const newPrecio = document.getElementById("precio__producto").value;
    const newRAM = document.getElementById("ram__producto").value;
    const newGarantia = document.getElementById("garantia__producto").value;
    const newProcesador = document.getElementById("procesador__producto").value;
    const newAlmacenamiento = document.getElementById("almacenamiento__producto").value;
    const newAño = document.getElementById("año__producto").value;

    const promesa = new Promise((resolve, reject) => {
        /*
        Ya que los nombres son unicos en todo el array, y no tengo forma de acceder al id del producto
        Recorro el array para encontrar el producto que tiene el mismo nombre que el que esta en el input y 
        cuando lo encuentro lo modifico
        */
        if (newNombre !== "" && newCategoria !== "" && newMarca !== "" && newPrecio !== "" && newRAM !== ""
            && newGarantia !== "" && newProcesador !== "" && newAlmacenamiento !== "" && newAño !== "") {
            for (let i = 0; i < productos.length; i++) {
                if (productos[i].Nombre === newNombre) {
                    productos[i].Nombre = newNombre;
                    productos[i].Categoria = newCategoria;
                    productos[i].Marca = newMarca;
                    productos[i].Precio = newPrecio;
                    productos[i].RAM = newRAM;
                    productos[i].Garantia = newGarantia;
                    productos[i].Procesador = newProcesador;
                    productos[i].Almacenamiento = newAlmacenamiento;
                    productos[i].Año = newAño;
                    break;
                }
            }
            //Luego de 1.5 segundos resuelvo la promesa
            setTimeout(() => {
                resolve();
            }, 1500);
        }else{
            alert("Hay campos en blanco, no deje dejar espacios vacios");
        }
    });
    promesa.then(() => {
        // Después de resolver la promesa (después de actualizar los productos), actualiza la tabla.
        verTabla(productos);
        modal.classList.remove("visible");
        modal.classList.add("hidden");
    });
}
document.getElementById("modal__btn--actualizar").addEventListener("click", actualizar);

function actualizarBotonesPaginacion() {
    const totalPaginas = Math.ceil(productos.length / productosMostrados) - 1;
    const btnAnterior = document.getElementById("section__botones--atras");
    const btnSiguiente = document.getElementById("section__botones--siguiente");
    if (paginaActual === 0)
        btnAnterior.disabled = true;
    else 
        btnAnterior.disabled= false;   

    if (paginaActual === totalPaginas)       
        btnSiguiente.disabled = true;
    else   
        btnSiguiente.disabled = false;

}

document.getElementById("section__botones--atras").addEventListener("click", irAtras);
document.getElementById("section__botones--siguiente").addEventListener("click", irAdelante);