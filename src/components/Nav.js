const goMain=()=>{
    window.location.replace(`/`);
}
export const Nav =()=>{
    return (
        <>
        <img src="https://raw.githubusercontent.com/gabgg71/cat-wiki/8d15e17e89d7c38cee38465cd337fafe2d17cfde/public/CatwikiLogo.svg" alt="logo" className="logo" onClick={goMain}></img>
        </>
    )
}