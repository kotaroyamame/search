const tree={
    v:1,
    child:[
        {
            v:2,
            child:[
                {
                    v:3,
                    child:[]
                },
                {
                    v:4,
                    child:[]
                }
            ]
        },
        {
            v:5,
            child:[
                {
                    v:6,
                    child:[]
                },
                {
                    v:7,
                    child:[]
                }
            ]
        }
    ]
}
function depthFirstSearch(tree,fn,depth=0){
    fn({tree,depth});
    for(const c of tree.child){
        depthFirstSearch(c,fn,depth+1);
    }
}
function breadthFirstSearch(tree,fn,depth=0){
    let que=[];
    que.push({tree,depth});
    
    while(que.length>0){
        const o = que.shift();
        fn(o);
        for(const c of o.tree.child){
            que.push({tree:c,depth:o.depth+1});
        }
        depth++;
    }
}
depthFirstSearch(tree,(o)=>{
    console.log(`${o.tree.v}  depth:${o.depth}`);
});
breadthFirstSearch(tree,(o)=>{
    console.log(`${o.tree.v}  depth:${o.depth}`);
});
