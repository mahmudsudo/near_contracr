"reach 0.1";

export const main = Reach.App(() => {
  setOptions({ untrustworthyMaps: true });
  const Deployer = Participant('Deployer', {
    ready: Fun([], Null),
    seeAttacher: Fun([Object({Address, Bool})], Null),
  });

  const Attacher = API('Attacher', {
    submitAddress: Fun([], UInt ),
  });

  init();

 Deployer.only(() => {
    interact.ready();
   
  });
  Deployer.publish();
  const LIST = new Set();
    commit(); 
  Deployer.publish();
  const [users] =
    parallelReduce([1])
    .invariant(balance() == 0)
    .while( users > 0 )
    .api_(Attacher.submitAddress, () => {
      return [ 0, (k) => {
        if(users <= 5){
          k(users);
          LIST.insert(this);
          Deployer.interact.seeAttacher({Address: this, Bool: true});
        }
        else{
          k(users);
          Deployer.interact.seeAttacher({Address: this, Bool: false});
        }
        return [ users + 1];
      }];
    })
  commit();
  exit();
});