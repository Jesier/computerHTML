const computer = {
	id: 1,
	manufacturer: "Apple",
	make: "Macbook",
	model: "Pro",
	specs: {
		memory: 32,
		hardDrive: "500 GB",
		processor: 2.4
	}
}



const computerSectionHTML = (computerObj) => {
    const computerHTML = `<section id="computer--"${computerObj.id}>\n\t<h1>${computerObj.manufacturer} Macbook</h1>\n\t<div>Model: ${computerObj.model}</div>\n\t<div>Memory: ${computerObj.specs.memory}</div>\n\t<div>Hard drive space: ${computerObj.specs.hardDrive}</div>\n\t<div>Processor speed: ${computerObj.specs.processor}</div>\n</section>`
        return computerHTML
}

/*const computerH1HTML = (computerObj) => {
    const computerHTML = `<h1>${computerObj.manufacturer}</h1`
        return computerHTML
}*/



console.log(computerSectionHTML(computer))