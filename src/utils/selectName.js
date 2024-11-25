export function selectName(name, data, func) {
    const selectedName = data.find((destination) => destination.name === name);
    func(selectedName);
}