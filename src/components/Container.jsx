import React from "react";

function Container({ children, className }) {
	return (
		<div
			className={`max-w-screen-xl px-4 h-full mx-auto sm:px-6 lg:px-8
        ${className ? className : ""}
        `}
		>
			{children}
		</div>
	);
}

export default Container;
