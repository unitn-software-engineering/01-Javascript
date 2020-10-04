const db = require('./db');

const postMark = (req, res) => {
    let mark = {
        userId: req.body.userId,
        assignmentId : req.body.assignmentId,
        mark: req.body.mark,
        text: req.body.text
    };

    if (!mark.mark || !Number.isInteger(mark.mark) || mark.mark < 0) {
        res.status(400).json({ error: 'The field "mark" is mandatory and must be an integer greater than 0' });
        return;
    }

    /* Qui assumo che il campo "text" possa anche non essere definito */
    if (mark.text && typeof mark.text != 'string') {
        res.status(400).json({ error: 'The field "text" must be a string' });
        return;
    }

    db.marks.insert(mark);

    res.status(201).json(mark);
};

const getMarks = (req, res) => {
    let userId = req.query.userId;
    let assignmentId = req.query.assignmentId;
    
    if ((!userId) && (!assignmentId)) {
        res.status(400).json({ error: 'Parameter "userId" is mandatory to achieve a minimum request' });
        return;
    }

    if (!userId) {
        res.status(400).json({ error: 'Parameter "userId" is mandatory to achieve a minimum request' });
        return;
    }
    
    if (isNaN(Number.parseInt(userId, 10))) {
        res.status(400).json({ error: 'Parameter "userId" must be an integer' });
        return;
    }

    if (userId <= 0) {
        res.status(400).json({ error: 'Parameter "userId" must be an integer greater than 0' });
        return;
    }

    if (assignmentId) {
        if (isNaN(Number.parseInt(assignmentId, 10))) {
            res.status(400).json({ error: 'Parameter "assignmentId" must be an integer' });
            return;
        }
        if (assignmentId <= 0) {
            res.status(400).json({ error: 'Parameter "assignmentId" must be an integer greater than 0' });
            return;
        }
    }

    let result;
    
    if (assignmentId) {
        result = db.marks.getSpecific(userId, assignmentId);
    }

    if (!assignmentId) {
        result = db.marks.getBulk(userId);
    }
    
    res.status(200).json(result);
};

module.exports = {
    postMark,
    getMarks
};
