import { SelectedPage } from "@/shared/types"
import useMediaQuery from "@/hooks/useMediaQuery"
import ActionButton from "@/shared/ActionButton"
import HomePageGraphic from "@/assets/HomePageGraphic.png"
import AnchorLink from "react-anchor-link-smooth-scroll";
import HText from "@/shared/HText";

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Home = ({ setSelectedPage }: Props) => {
    const flexBetween = "flex items-center justify-between"
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")

    return (
        <section id="home" className="gap-16 py-10 md:h-full md:pb-0">
            {/* Image And Main */}
            <div className="bg-secondary-50 mt-10 pb-10 md:pb-0 md:flex justify-center items-center">
                {/* Image */}
                <div className="z-10 mt-10 md:basis-3/5 w-30">
                    <img alt="home-page-graphic" className="md:max-w-xl md:justify-start" src={HomePageGraphic} />
                </div>
                {/* Title */}
                <div className="flex flex-col md:text-left px-5 items-center md:items-start">
                    <HText>
                        <span className="text-white mt-10">FITNESS GYM</span>
                    </HText>
                    <p className="text-white my-5 text-md">with 33 clubs nationwide and more than 20,000 group
                        fitness classes per month Exercise around you with the power to lead you towards your goals
                    </p>
                    {/* Button */}
                    <div className={`${flexBetween} gap-8`}>
                        <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Home