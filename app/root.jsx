// export const App = () => {
//     return (
//         <h1>pichi de mono</h1>
//     )
// }
import {
    Meta,
    Links
} from '@remix-run/react'
import styles from './styles/index.css'
// esto ayuda para el seo =>  puede busdcar sobre ello con remix
export function meta() {
    return [
        { charset: "utf-8" },
        { title: "GuitarLA - Remix" },
        { name: "viewport", content: "width=device-width,initial-scale=1" },
      ];
}
// para usar los estilos se hace de esta manera
export function links() {
    return[
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}
// esto es como el index
export default function App() {
    return (
        <Document>
            <h1>Hola mundis</h1>
        </Document>
    )
}
// esto es como un component
function Document({ children }) {
    return (
        <html lang="es">
            <head>
               <Meta/>
               <Links/>
            </head>

            <body>
                {children}
            </body>
        </html>
    )
}