
export function merge(collection_1 : number[], collection_2 : number[]) : number[] 
{   
    let collectionMerge = [...collection_1, ...collection_2];
    //insert sort algorithm
    let nLength = collectionMerge.length;
    for (let i = 1; i < nLength ; i++) {
        let key : number = collectionMerge[i];
        let j : number = i - 1;
        while ( j >= 0 && collectionMerge[j] > key) {
            collectionMerge[j + 1] = collectionMerge[j];
            j = j - 1 ;
        }
        collectionMerge[j + 1] = key;
    }
    return collectionMerge;
}


// let collec01 : number[] = [0,3,5,3,8];
// let collec02 : number[] = [1,4,6,4,2];
// let mergeCollection = merge(collec01, collec02);
// console.log(mergeCollection)