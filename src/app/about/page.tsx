

type Props = {
    children: React.ReactNode
}

export default function AboutPage({children}: Props) {
    return (
        <div>
            this is the about page

            {children}
        </div>
    )
}
