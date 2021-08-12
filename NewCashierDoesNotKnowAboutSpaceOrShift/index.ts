const MENU_ITEMS = [
    "burger",
    "fries",
    "chicken",
    "pizza",
    "sandwich",
    "onionrings",
    "milkshake",
    "coke",
]

export default function getOrder(input: string): string {
    const registeredItems = MENU_ITEMS.map((item) => {
        const quantityItems = input.match(new RegExp(item, "g"))?.length
        return { [item]: quantityItems }
    })

    let listItems = ""
    registeredItems.forEach((item) => {
        const object = Object.entries(item)[0]
        let name = object[0]
        //Capitalize and add spacing
        name = name.charAt(0).toUpperCase() + name.toLocaleLowerCase().slice(1) + " "
        const value = object[1]
        if (value) {
            listItems += name.repeat(value)
        }
    })
    listItems = listItems.substring(0, listItems.length - 1)
    return listItems
}