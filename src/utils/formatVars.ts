type FilterOptionProps = 'all' | 't-shirts' | 'mugs';
type OrderOptionProps = 'news' | 'ascending' | 'descending' | 'topseller' | 'none';

export function formatVars(sortField: FilterOptionProps, sortOrder: OrderOptionProps, page: number) {

    const formatOrderList = {
        'news' : [ 'created_at', 'DESC' ],
        'topseller' : [ 'sales', 'DESC' ],
        'descending' : [ 'price_in_cents', 'DESC' ],
        'ascending' : [ 'price_in_cents', 'ASC' ]
    }

    const formatedFilter = sortField === 'all' ? {} : { "category": `${sortField}` };
    const formatedOrder = sortOrder === 'none' ? '' : [...formatOrderList[`${sortOrder}`]];

    const vars = {
        page: page,
        perPage: 12,
        sortFilter: formatedFilter,
        sortField: formatedOrder[0],
        sortOrder: formatedOrder[1],
    }

    return vars;
}