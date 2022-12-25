// import { flow } from "../public/icon";
import { useEffect } from "react";

const Events = () => {
    useEffect(() => {

        const navbar = document.querySelector('#navbar');
        const churchinfo_metamenu = document.querySelector('#churchinfo_metamenu')
        churchinfo_metamenu.style.color = 'rgb(45, 55, 72)';
        navbar.style.backgroundColor = 'transparent'
        navbar.style.color = 'white'
        const transparentHover = document.querySelectorAll('.transparent-bg-hover')
        const arrayTransparentHover = Array.from(transparentHover)

        navbar.style.boxShadow = 'none'

        

        document.addEventListener('scroll', () => {
            navbar.style.backgroundColor = 'white'
            navbar.style.color = 'rgb(45, 55, 72)'
            arrayTransparentHover.map(element => {
                element.style.setProperty('--color-hoverOnTransparent', '89 104 216')
            })


        })
        arrayTransparentHover.map(element => {
            element.style.setProperty('--color-hoverOnTransparent', '163 191 250')
        })

    }, [])


    return (
        <div>

            <div className=" bg-color-events-bg bg-center bg-no-repeat bg-cover h-[500px]  bg-[url('/icon/flow.svg')]   -mt-[68px] ">

            </div>
            <div className=" container mx-auto  max-w-5xl bg-color-btn h-[300px] -mt-[68px]">

            </div>
        </div>
    )
}

export default Events