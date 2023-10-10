
export const useMainSection = () => {
    const mainSectionData = [
        {
            name: 'Installation',
            description:
                'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
            imagePath: 'aide',
        },
        {
            name: 'Conseil',
            description:
                'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
            imagePath: 'conseil',
        },
        {
            name: 'Maintenance',
            description:
                'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
            imagePath: 'vieux',
        },
        {
            name: 'Support',
            description:
                'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
            imagePath: 'bug_pc',
        },
    ]

    return {mainSectionData}
}