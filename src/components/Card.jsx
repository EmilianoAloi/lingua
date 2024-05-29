import Image from "next/image"
import cardImg from "@/assets/cards/0.jpg"

const Card = () => {
    return (
        <div>
            <Image src={cardImg} height={500} alt="card img" />
            <button class="mt-8 px-8 py-4 bg-customPink text-white text-lg font-semibold rounded hover:bg-pink-600 transition duration-300">
                ¡Inscríbete Ahora!
            </button>
        </div>
    )
}

export default Card