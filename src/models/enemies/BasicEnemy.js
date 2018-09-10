import {VisibleEntity} from '../Entity';
import AttackManager from '../../services/AttackManager';

export default class BasicEnemy extends VisibleEntity {
    constructor(x, y) {
        super(x, y);
        this.color = '#374F6B';
        this.name = 'Basic';
        this.hp = 50;
        this.maxHp = 50;
        this.attackPower = 1;
        this.debuffPower= 5;
    }

    attack(player) {
        let random = Math.floor(Math.random() * 500);
        if (random <= 480) {
            return AttackManager.damage(this.name, player, this.attackPower);
        } else {
            if (random <= 580) {
                return AttackManager.addStress(this.name, player, this.debuffPower);
            } else {
                return AttackManager.loseFocus(this.name, player, this.debuffPower);
            }
        }
    }
}