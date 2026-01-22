import { TableView as BaseTable } from 'react-native-tableview-simple';
import type { TableViewInterface } from 'react-native-tableview-simple/lib/typescript/components/TableView';

export function Table(props: TableViewInterface) {
    // Deconstruct props
    const { children, ...rest } = props;

    return (
        <BaseTable
            {...rest}
        >
            {children}
        </BaseTable>
    );
};