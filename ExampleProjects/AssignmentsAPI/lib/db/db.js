const storage = {
    users: [],
    assignments: [],
    marks: []
};

const users = {
    insert(user) {
        let ids = storage.users.map(a => a.id);

        let maxId = 0;
        if (ids.length) {
            maxId = Math.max(...ids);
        }

        user.id = maxId + 1;
        storage.users.push(user);
    },

    findById(userId) {
        return storage.users.find(x => x.id == userId);
    }

};

const assignments = {
    maxIndex: 0,

    insert(assignment) {
        assignment.id = (++assignments.maxIndex);
        storage.assignments.push(assignment);
    },

    find() {
        return storage.assignments;
    },

    findWithUserId(userId) {
        return storage.assignments.filter(assignment =>
            assignment.users.includes(userId)
        );
    },

    findById(id) {
        return storage.assignments.find(x => x.id == id);
    },

    removeById(id) {
        let index = storage.assignments.findIndex(x => x.id == id);

        if (index >= 0) {
            storage.assignments.splice(index, 1);
            return true;
        }
        else {
            return false;
        }
    }
};

const marks = {
    insert(mark) {
        storage.marks.push(mark);
    },
    getSpecific(userId, assignmentId) {
        //console.log("userId = " + user + ", assignmentId = " + assignmentId);
        return (storage.marks.filter(m => m.userId == userId && m.assignmentId == assignmentId))[0];
    },
    getBulk(userId) {
        return storage.marks.filter(m => m.userId == userId);
    }
};

module.exports = {
    users,
    assignments,
    marks
};
