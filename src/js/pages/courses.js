export function courses() {
  return {
    activeCategory: "all",
    courses: JSON.parse(serializedCourses),
    categories: JSON.parse(serializedCategories),
    resetScroll() {
      window.scrollTo({ top: 350, behavior: "smooth" });
      return false;
    },
  };
}

// Definición de la función que obtiene los datos de los cursos
function getCourses() {
  return [
    {
      category: "nursing",
      name: "Curso de Enfermería",
      specialty: "Cardiologist",
      rating: 4.8,
      imageUrl: "/img/illustrations/doctors/doctor-1.svg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      category: "obstetrics",
      name: "Curso de Obstetricia",
      specialty: "Gynaecologist",
      rating: 4.4,
      imageUrl: "/img/illustrations/doctors/doctor-2.svg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    // Añade más cursos según necesites
  ];
}

// Obtención de los cursos y preparación para pasar al cliente
const coursesData = getCourses();
const serializedCourses = JSON.stringify(coursesData); // Serializa los cursos para uso en Alpine.js


const categories = [
  { id: 'all', name: 'Todos', icon: 'ph:first-aid-duotone' },
  { id: 'nursing', name: 'Enfermería', icon: 'ph:person-duotone' },
  { id: 'obstetrics', name: 'Obstetricia', icon: 'ph:heartbeat-duotone' },
  // { id: 'neurology', name: 'Neurología', icon: 'ph:brain-duotone' },
  // { id: 'gynaecology', name: 'Ginecología', icon: 'ph:baby-duotone' },
  // { id: 'surgery', name: 'Cirugía', icon: 'ph:syringe-duotone' },
  // { id: 'dermatology', name: 'Dermatología', icon: 'ph:hand-soap-duotone' }
];
const serializedCategories = JSON.stringify(categories);