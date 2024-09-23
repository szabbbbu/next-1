import Link from "next/link"

import Styles from "@/components/CustomLink.module.css"

type Props = {
    children: React.ReactNode,
    to: string
}

export default function CustomLink({children, to}: Props) {

    return (
        <Link href={to}>
            <button id={Styles.customLink}>
                {children}
            </button>
        </Link>
    )

}

