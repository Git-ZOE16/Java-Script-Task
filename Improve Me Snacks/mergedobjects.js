const personal = {
    name: "Kemi",
    age:  27
};
const professional = {
    role: "Designer",
    company: "Tech Corp"
};

function mergeObjects(personal, professional) {
    return { ...personal, ...professional}
}

const merged = mergeObjects(personal, professional);
console.log(merged);
