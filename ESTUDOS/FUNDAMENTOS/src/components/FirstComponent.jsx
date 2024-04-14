import MyComponent from './MyComponent'

const FirstComponent = ()=>{
    return (
        <div className="flex flex-col items-center">
            <p className="text-2xl">
                Meu primeiro Componente
            </p>
            <p>
                <MyComponent />
            </p>
        </div>
    )
}

export default FirstComponent