import "./WorkButton.css"

interface WorkButtonProps {
    text: string;
}

const WorkButton = (props: WorkButtonProps) => {
    return <button className="btn">{props.text}</button>
}

export default WorkButton;