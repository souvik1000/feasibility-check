import React from "react"

import DownloadIcon from "../../../assets/download.svg"

import "./Button.css"

interface ButtonProps {
    children: React.ReactNode
    disabled?: boolean
    className?: string
    type?: "button" | "submit" | "reset"
    onClick: () => void
}

const Button: React.FC<ButtonProps> = ({
    onClick,
    children,
    disabled = false,
    type = "button",
    className = "",
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`shared-btn ${className}`}
        >
            <img src={DownloadIcon} alt="Download icon" />
            {children}
        </button>
    )
}

export default Button
