import {ref} from 'vue';
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/vue/24/outline'


export function UseHeader() {

    const headerData = {title: "Aide informatique à Annecy", subtitle: "Interventions à domicile", background_colors: "#940B92"}

    // 
   /* const features = [
        {
            name: 'Installation test',
            description:
                'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
            icon: CloudArrowUpIcon,
        },
        {
            name: 'Conseil',
            description:
                'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
            icon: LockClosedIcon,
        },
        {
            name: 'Maintenance',
            description:
                'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
            icon: ArrowPathIcon,
        },
        {
            name: 'Support',
            description:
                'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
            icon: FingerPrintIcon,
        },
    ]*/



    return { headerData};
}
