class Task {
    taskname;
    id;

    parent;
    children = new Set();

    assigned_Date = new DateTag();
    owner = new PersonTag();
    tags = new Set();
    taskstatus = new Tag();

    Task(taskname, id, parent) {
        
        this.taskname = taskname;
        this.id = id;

        this.parent = parent;
        this.children = new Set();

        this.assigned_Date = null;
        this.owner = null;
        this.tags = new Set();
        this.taskstatus = null;
    }


    getTaskname() {
        return this.taskname;
    }
    changeTaskname(name) {
        this.taskname = name;
    }
    
    getId() {
        return this.id;
    }

    getParent() {
        return this.parent;
    }
    changeParent(newParent) {
        this.parent = newParent;
    }

    getChildren() {
        return this.children
    }
    isChild(taskparam) {
        this.children.has(taskparam);
    }
    addChild(child) {
        this.children.add(child);
    }
    deleteChild(child) {
        this.children.delete(child);
    }

    getAssignedDate() {
        return this.assigned_Date;
    }
    setAssignedDate(newAssigned) {
        this.assigned_Date = newAssigned;
    }

    getOwner() {
        return this.owner;
    }
    setOwner(person) {
        this.owner = person;
    }
    getTags() {
        return this.tags;
    }
    addTag(tag) {
        this.tags.add(tag)
    }
    deleteTag(tag) {
        this.tags.delete(tag);
    }
    isTagSet(tag) {
        return this.tags.has(tag);
    }


}

class Tag {
    name;
    taginfo;
    taggroup = new Set();

    Tag (name, taginfo) {
        this.name = name;
        this.taginfo = taginfo;
        this.taggroup = new Set();
    }

    getName() {
        return this.name;
    }
    changeName(name) {
        this.name = name;
    }

    getTagInfo() {
        return this.taginfo;
    }
    setTagInfo(text) {
        this.taginfo = text;
    }

    getTagGroup() {
        return this.taggroup;
    }
}

class PersonTag extends Tag {
    id;
    contact;

    PersonTag(name, taginfo, id, contact) {
        super(name, taginfo);
        this, id = id;
        this.contact = contact;
    }

    getId() {
        return this.id;
    }

    getContact() {
        return this.contact;
    }
    setContact(text) {
        this.contact = text;
    }
}

class DateTag extends Tag {
    date = new Date();

    DateTag(name, taginfo, date) {
        super(name, taginfo)
        this.date = date;
    }
}