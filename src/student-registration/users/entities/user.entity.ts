import { Column, Entity, JoinColumn, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import { Student } from "src/student-registration/students/entities/student.entity";
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    firstName: string;
    @Column({ nullable: true })
    middleName: string;
    @Column()
    lastName: string;
    @Column()
    email: string;
    @Column({ nullable: true })
    dateOfBirth: Date;
    @Column({ nullable: true })
    nationality: string
    @Column({ nullable: true })
    address: string
    @Column({ default: true })
    isActive: boolean;
    @JoinColumn()
    @OneToOne(type => Student, student => student.user)
    student: Student;
}