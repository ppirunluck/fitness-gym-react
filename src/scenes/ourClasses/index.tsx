import HText from "@/shared/HText"
import { ClassType, SelectedPage } from "@/shared/types"
import Class from "./Class"
import WeightTrainingClass from "@/assets/WeightTrainingClass.jpg"
import YogaClass from "@/assets/YogaClass.jpg"
import BoxingClass from "@/assets/BoxingClass.jpg"

const classes: Array<ClassType> = [
    {
        image: WeightTrainingClass,
        title: "State of the Art Facilities",
        description:
            "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
    },
    {
        image: YogaClass,
        title: "100's of Diverse Classes",
        description:
            "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
    },
    {
        image: BoxingClass,
        title: "Expert and Pro Trainers",
        description:
            "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
    },
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const OurClasses = ({ setSelectedPage }: Props) => {
    return (
        <section id="ourclasses" className="mx-auto min-h-full w-5/6 py-20">
            <div
                // onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
            >
                {/* Header */}
                <div className="md:my-5 md:w-3/5">
                    <HText>MORE THAN JUST A GYM</HText>
                    <p className="my-5 text-sm">
                        We provide world class fitness equipment, trainers and classes to
                        get you to your ultimate fitness goals with ease. We provide true
                        care into each and every member.
                    </p>
                </div>
                {/* Classes */}
                <div className="md:flex items-center justify-between gap-8 mt-5">
                    {classes.map((class: ClassType) => (
                    <Class
                        key={class.title}
                        image={class.image}
                        title={class.title}
                        description={class.description}
                        setSelectedPage={setSelectedPage}
                    />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OurClasses


