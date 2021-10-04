export function formatPagesCount(pages: number): number {
    if(pages === 0)
        return 1;
    else 
        return Math.floor(pages/12)
}