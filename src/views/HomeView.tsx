const HomeView = () => {
    return (
        <div className="container" style={{marginTop: "100px; height: 2000px;"}}>
        <h2>Desliza hacia abajo para ver el efecto</h2>
        <p>El texto e imágenes pasarán por detrás de la navbar con un elegante efecto difuminado.</p>
        <div className="bg-primary text-white p-5 my-5 rounded shadow">
          Un bloque de color para notar el contraste de la transparencia.
        </div>
      </div>
    )
}

export default HomeView;