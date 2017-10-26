function QueueDataStructure () {
  this.queueControl = [];
  this.queue.MAX_SIZE = 10;
};

QueueDataStructure.prototype.isEmpty = function(){
  if (this.queueControl.length == 0;) {
      return true;
  } else {
    return false;
  }
};
QueueDataStructure.prototype.canEnqueue = function(){
  if (this.queueControl < this.queue.MAX_SIZE) {
    return true
  }else {
    return false;
  }
};

QueueDataStructure.prototype.enqueue = function(){

};

QueueDataStructure.prototype.dequeue = function(){

};
